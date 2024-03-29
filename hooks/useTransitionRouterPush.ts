import { useRouter } from "next/router";
import { useCallback } from "react";
import useViewTransition from "./useViewTransition";

const useTransitionRouterPush = () => {
  const router = useRouter();
  const routerPush = useCallback(
    async (to: string) => {
      await router.push(to);
    },
    [router]
  );
  const { startViewTransition: routerPushWithTransition } =
    useViewTransition(routerPush);

  return { routerPushWithTransition };
};

export default useTransitionRouterPush
