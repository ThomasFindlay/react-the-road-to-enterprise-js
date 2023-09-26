const BASE_URL = "http://localhost:3000";

const DisplayUsers = async props => {
  const { users } = await fetch(`${BASE_URL}/api/user/list`).then(res =>
    res.json()
  );

  return (
    <div style={{ maxWidth: 600, margin: "0 auto" }}>
      <h1>DisplayUsers</h1>
      <div>
        {users.map(user => {
          return <div key={user.id}>{user.name}</div>;
        })}
      </div>
    </div>
  );
};

export default DisplayUsers;
