//@since 0.2.0
if (Meteor.users.find().count() === 0) {
  adminId = Accounts.createUser({
    username: 'Skeltoras',
    email: 'dev@skeltoras.de',
    password: 'test',
    //@since 0.9.0
    profile: {
      first_name: "Simon",
      last_name: "Knipping",
      nickname: "Skeltoras"
    },
  });
  Roles.addUsersToRoles(adminId, 'admin');
  userId = Accounts.createUser({
    username: 'Felix',
    email: 'felix.hau@info3.de',
    password: 'test',
    //@since 0.9.0
    profile: {
      first_name: "Felix",
      last_name: "Hau",
      nickname: "Felix"
    },
  });
  Roles.addUsersToRoles(userId, 'admin');
};