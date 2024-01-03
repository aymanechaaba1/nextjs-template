import { auth, signIn } from '@/lib/auth';
import { Button } from './ui/button';
import UserBtn from './UserBtn';
import Link from 'next/link';
import ToggleDarkMode from './ToggleDarkMode';
import SignInBtn from './SignInBtn';

async function NavBar() {
  const session = await auth();

  return (
    <div className="flex items-center justify-between">
      <Link href={`/`}>logo</Link>
      <div>links</div>
      <div className="flex items-center gap-3">
        <ToggleDarkMode />
        <div>
          {session && session.user ? (
            <UserBtn session={session} />
          ) : (
            <SignInBtn />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
