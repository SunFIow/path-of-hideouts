import Header from '@/components/header/header';
import Hero from '@/components/hero';
import Logger from '@/lib/Logger';

export default function App() {
	Logger.log('App');

	return (
		<div className='relative flex min-h-screen flex-col'>
			<Header />
			<main className='mx-auto flex w-full max-w-7xl flex-1 flex-col items-center px-6 pb-16 pt-10 sm:px-10 lg:px-12'>
				<Hero />
			</main>
		</div>
	);
}
