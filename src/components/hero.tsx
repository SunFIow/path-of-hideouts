import { APP_NAME, APP_TAGLINE } from '@/constant/constants';
import { BoxSelect, Combine, Download, Layers3 } from 'lucide-react';

const pillars = [
	{
		title: 'Open your hideouts',
		description: 'Load your existing .hideout files and explore them by decoration sets, NPCs, and utility objects.',
		icon: Layers3
	},
	{
		title: 'Save the best parts',
		description: 'Turn a crafting corner, an NPC hub, or your favorite artwork into a reusable module you can keep using.',
		icon: BoxSelect
	},
	{
		title: 'Remix and export',
		description: 'Combine layouts from different hideouts, adjust placement, and export a finished hideout back into the game format.',
		icon: Combine
	}
];

const highlights = ['Local file editing', 'Reusable layouts', 'Open source'];

const workflow = [
	'Import one or more hideouts/modules.',
	'Select the sections you want to keep.',
	'Save them as reusable modules.',
	'Combine Artworks, NPCs, and Utilities from different hideouts.'
];

export default function Hero() {
	return (
		<div className='flex w-full flex-col gap-14'>
			<section className='border-app-accent/70 bg-app/80 relative overflow-hidden rounded-[2rem] border px-6 py-10 shadow-[0_30px_100px_-55px_rgba(255,171,64,0.65)] backdrop-blur sm:px-10 sm:py-14'>
				<div className='absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(255,173,51,0.18),transparent_60%)]' />
				<div className='relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end'>
					<div className='max-w-3xl'>
						<p className='border-app-accent/80 mb-4 inline-flex rounded-full border bg-black/20 px-4 py-1 text-xs uppercase tracking-[0.28em] text-app-color'>
							Path of Exile hideout editor
						</p>
						<h1 className='font-display text-5xl leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl'>{APP_NAME}</h1>
						<p className='mt-5 max-w-2xl text-lg text-font-2 sm:text-xl'>{APP_TAGLINE}</p>
						<p className='mt-6 max-w-2xl text-sm leading-7 text-font-faded sm:text-base'>
							Bring together the artwork of one hideout, the utility layout of another, and the details you want to keep from both.
						</p>
						<div className='mt-8 flex flex-wrap gap-3'>
							{highlights.map(target => (
								<span key={target} className='rounded-full border border-app-accent bg-black/20 px-4 py-2 text-sm text-font-2'>
									{target}
								</span>
							))}
						</div>
					</div>

					<div className='border-app-accent/80 grid gap-3 rounded-[1.5rem] border bg-black/25 p-5 text-sm text-font-2'>
						<div className='border-app-accent/60 flex items-center justify-between border-b pb-3'>
							<span className='uppercase tracking-[0.24em] text-font-faded'>How it works</span>
							<Download className='size-4 text-app-color' />
						</div>
						{workflow.map((step, index) => (
							<div key={step} className='flex gap-3'>
								<span className='font-display text-2xl text-app-color'>{String(index + 1).padStart(2, '0')}</span>
								<p className='pt-1'>{step}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className='grid gap-5 lg:grid-cols-3'>
				{pillars.map(({ title, description, icon: Icon }) => (
					<article key={title} className='border-app-accent/60 rounded-[1.5rem] border bg-card/80 p-6 shadow-[0_18px_50px_-35px_rgba(0,0,0,0.7)]'>
						<div className='mb-4 flex size-12 items-center justify-center rounded-2xl border border-app-accent bg-app'>
							<Icon className='size-5 text-app-color' />
						</div>
						<h2 className='font-display text-3xl leading-tight'>{title}</h2>
						<p className='mt-3 text-sm leading-7 text-font-2'>{description}</p>
					</article>
				))}
			</section>

			<section className='border-app-accent/70 grid gap-6 rounded-[2rem] border bg-[linear-gradient(135deg,rgba(255,179,26,0.08),transparent_55%),linear-gradient(180deg,rgba(0,0,0,0.08),transparent)] p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]'>
				<div>
					<p className='text-sm uppercase tracking-[0.28em] text-font-faded'>Built for players</p>
					<h2 className='font-display mt-3 text-4xl leading-tight'>Keep your files local, reuse the layouts you love, and share improvements with the community.</h2>
				</div>
				<div className='grid gap-4 text-sm leading-7 text-font-2 sm:grid-cols-2'>
					<div className='border-app-accent/60 rounded-[1.25rem] border bg-black/10 p-5'>
						<h3 className='font-display text-2xl text-foreground'>Private by default</h3>
						<p className='mt-2'>Your hideouts stay on your machine while you open, edit, and export them in the browser.</p>
					</div>
					<div className='border-app-accent/60 rounded-[1.25rem] border bg-black/10 p-5'>
						<h3 className='font-display text-2xl text-foreground'>Reuse what works</h3>
						<p className='mt-2'>Save the layouts you love once, then drop them into future hideouts without rebuilding them by hand.</p>
					</div>
					<div className='border-app-accent/60 rounded-[1.25rem] border bg-black/10 p-5'>
						<h3 className='font-display text-2xl text-foreground'>Share finished work</h3>
						<p className='mt-2'>Share your modules or full hideouts with friends or the community to show off your creativity and inspire others.</p>
					</div>
					<div className='border-app-accent/60 rounded-[1.25rem] border bg-black/10 p-5'>
						<h3 className='font-display text-2xl text-foreground'>Open to contributors</h3>
						<p className='mt-2'>The project is open source, so new ideas, bug fixes, and hideout-focused improvements can come from the community.</p>
					</div>
				</div>
			</section>
		</div>
	);
}
