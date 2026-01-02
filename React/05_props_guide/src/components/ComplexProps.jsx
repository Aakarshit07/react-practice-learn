function UserProfileCard({ user, theme, actions }) {
  return (
    <div
      className={`p-6 rounded-lg ${theme.backgroundColor} ${theme.textColor}`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-16 h-16 rounded-full ${theme.avatarBg} flex items-center justify-center text-2xl`}
        >
          {user.avatar}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{user.name}</h3>
          <p className="text-sm opacity-80 mb-2">{user.email}</p>
          <div className="flex gap-2 text-sm">
            <span className={`px-3 py-1 rounded-full ${theme.badgeBg}`}>
              {user.role}
            </span>
            <span className={`px-3 py-1 rounded-full ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {user.stats && (
        <div className="mt-4 pt-4 border-t border-gray-300 grid grid-cols-3 gap-4">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-xs opacity-75 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-2">
        {actions.primary && (
          <button
            className={`w-full p-2 rounded-lg ${actions.primary.className}`}
            onClick={actions.primary.onClick}
          >
            {actions.primary.label}
          </button>
        )}
        {actions.secondary && (
          <button
            className={`w-full p-2 rounded-lg ${actions.secondary.className}`}
            onClick={actions.secondary.onClick}
          >
            {actions.secondary.label}
          </button>
        )}
      </div>
    </div>
  );
}

const ComplexProps = () => {
  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-amber-100 text-amber-800 hover:bg-amber-200",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-amber-100 to-orange-100",
        textColor: "text-gray-800",
        avatarBg: "bg-amber-300",
        badgeBg: "bg-amber-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-amber-500 text-white hover:bg-amber-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-purple-100 text-purple-800 hover:bg-purple-200",
        },
      },
    },
  ];

  return (
    <div className="space-y-8 bg-white p-8 rounded-xl">
      <div>
        <h3 className="font-bold text-2xl my-2">User Profile Card</h3>
        <div className="space-y-4">
          {users?.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplexProps;
