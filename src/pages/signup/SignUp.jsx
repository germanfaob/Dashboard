import "./signup.css";

export const SignUp = () => {
  return (
    <div className="signup-container">
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="youremail@example.com" />
      </form>
    </div>
  );
};
