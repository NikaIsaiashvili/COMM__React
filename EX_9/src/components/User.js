function User({ userInfo }) {
  return (
    <>
      {userInfo.map((userInfo) => (
        <div className="card">
          <>
            <img src={userInfo.picture.medium} alt="userImg"></img>
            <p>{userInfo.email}</p>
            <p>
              {" "}
              {userInfo.name.title + userInfo.name.first + userInfo.name.last}
            </p>
            <p> City: {userInfo.location.city}</p>
            <p> Age: {userInfo.dob.age}</p>
            <p> Date: {userInfo.dob.date}</p>
          </>
        </div>
      ))}
    </>
  );
}

export default User;
