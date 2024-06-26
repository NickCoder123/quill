import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

import { MaxWidthWrapper } from "~/components/max-width-wrapper";
import { buttonVariants } from "~/components/ui/button";

type Props = {};

export const Navbar = ({}: Props) => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>feder.</span>
          </Link>

          {
            // todo: add mobile navbar
          }

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>

              <LoginLink
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                Sign in
              </LoginLink>

              <RegisterLink className={buttonVariants({ size: "sm" })}>
                Get started
              </RegisterLink>
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
