import { signIn } from '@/lib/auth';
import { Button } from './ui/button';

function SignInBtn() {
  return (
    <form>
      <Button
        formAction={async () => {
          'use server';
          await signIn();
        }}
      >
        Sign In
      </Button>
    </form>
  );
}

export default SignInBtn;
