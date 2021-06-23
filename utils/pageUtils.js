import { sessionUserIsSpecialist } from "@/utils/sessionUtils";
import { getSession } from "next-auth/client";

export const getResultForAuthenticatedPage = async context => {
  const session = await getSession(context);

  // Session user is specialist and is granted access
  // to the app
  if (sessionUserIsSpecialist(session)) {
    return {
      props: {
        session
      }
    };
  }

  if (
    session &&
    !(process.env.SHOW_ME_THE_MONEY_SPECIALISTS_ONLY_MODE?.toLowerCase() === "true" ?? false)
  ) {
    return {
      props: {
        session
      }
    };
  }

  // We have a session user but the session user is not
  // a specialist. Redirect to access denied
  if (session) {
    return {
      redirect: {
        destination: "/access-denied",
        permanent: false
      }
    };
  }

  // No session. Redirect to login
  return {
    redirect: {
      destination: "/login",
      permanent: false
    }
  };
};