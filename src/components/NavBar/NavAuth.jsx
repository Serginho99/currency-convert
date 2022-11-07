import { Box, NavAuthSignIn, NavAuthSignUp } from './NavAuth.styled';

export default function NavAuth() {
  return (
    <>
      <Box>
        <NavAuthSignUp to="register">Sign Up</NavAuthSignUp>
        <NavAuthSignIn to="login">Sign In</NavAuthSignIn>
      </Box>
    </>
  );
}
