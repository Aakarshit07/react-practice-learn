import ContactForm from "@/components/contact-form";

export default async function Home() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-4">Server Action Demos</h1>
          <p className="text-lg text-gray-400 max-2xl mx-auto">
            Contact from with MongoDb and revalidation
          </p>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
