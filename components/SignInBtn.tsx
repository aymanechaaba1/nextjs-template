'use client';

import { signIn } from 'next-auth/react';
import { Button } from './ui/button';

function SignInBtn() {
  return (
    <Button
      onClick={async () => {
        await signIn();
      }}
    >
      Sign In
    </Button>
  );
}

export default SignInBtn;
