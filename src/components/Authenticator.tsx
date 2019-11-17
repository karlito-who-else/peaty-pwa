import Amplify from "aws-amplify";

// import Amplify, {
// Analytics,
// Storage,
// API,
// graphqlOperation
// } from "aws-amplify";

import {
  // ConfirmSignIn,
  // ConfirmSignUp,
  // ForgotPassword,
  // RequireNewPassword,
  // SignIn,
  // SignUp,
  // VerifyContact,
  withAuthenticator
} from "aws-amplify-react";

import awsconfig from "../aws-exports";

import AmplifyTheme from "./Amplify/Theme";

Amplify.configure(awsconfig);

const Authenticator = ({
  children
}: InferProps<typeof Authenticator.propTypes>): ReactElement => children;

export default withAuthenticator(
  Authenticator,
  false, // set to true to show default AWS-supplied log out button
  [],
  null,
  AmplifyTheme
);

// const withThemedAuthenticator = Component =>
//   class WithThemedAuthenticator extends React.Component {
//     render() {
//       const { loading, ...props } = this.props;
//       return loading ? <LoadingSpinner /> : <Component {...props} />;
//     }
//   };
