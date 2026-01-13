"use server";

import { STATUS } from "@/components/contact-list";
import dbConnect from "@/lib/db";
import { Contact } from "@/models/Contact";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";

export async function createContact(formData) {
  try {
    await dbConnect();
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    const contact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    const savedContact = await contact.save();

    revalidateTag("contact-stats");

    return {
      success: true,
      message: "Message sent successfully!",
      contactId: savedContact._id.toString(), // we should conver this type of id to string as its not string by default
    };
  } catch (error) {
    console.error("Error creating contact:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}

export async function getContacts() {
  try {
    await dbConnect();
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).lean();
    return contacts.map((contact) => {
      return {
        ...contact,
        _id: contact._id.toString(),
        createdAt: contact.createdAt.toISOString(),
        updatedAt: contact.updatedAt,
      };
    });
  } catch (error) {
    console.error("Error fetching contacts list:", error);
    return [];
  }
}

export async function updateContactStatus(contactId, newStatus) {
  try {
    await dbConnect();

    await Contact.findByIdAndUpdate(contactId, {
      status: newStatus,
    });
    revalidatePath("/contacts");
    revalidateTag("contact-stats");
    return {
      success: true,
      message: "Status Updated successfully!",
    };
  } catch (error) {
    console.error("Error Updating Status: ", error);

    return {
      success: false,
      error: "Something went wrong. Please try again.",
    };
  }
}

export async function getContactStats() {
  const getCachedStats = unstable_cache(
    async () => {
      await dbConnect();
      const total = await Contact.countDocuments();
      const newCount = await Contact.countDocuments({ status: STATUS.NEW });
      const readCount = await Contact.countDocuments({ status: STATUS.READ });
      const repliedCount = await Contact.countDocuments({
        status: STATUS.REPLIED,
      });
      return {
        total,
        newCount,
        readCount,
        repliedCount,
      };
    },
    ["contact-stats"],
    { tags: ["contact-stats"] }
  );

  return getCachedStats();
}
