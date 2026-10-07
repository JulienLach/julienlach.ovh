import { useEffect, useRef, useState } from 'react';

const EVENTS_URL = 'https://api.github.com/users/JulienLach/events/public';

function formatRelativeTime(date: Date): string {
	const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
	if (seconds < 60) return "à l'instant";

	const minutes = Math.floor(seconds / 60);
	if (minutes < 60) return `il y a ${minutes} min`;

	const hours = Math.floor(minutes / 60);
	if (hours < 24) return `il y a ${hours} h`;

	const days = Math.floor(hours / 24);
	return `il y a ${days} j`;
}

export default function GithubActivity() {
	const [lastActive, setLastActive] = useState<string | null>(null);
	const hasFetched = useRef(false);

	useEffect(() => {
		if (hasFetched.current) return;
		hasFetched.current = true;

		fetch(EVENTS_URL)
			.then((res) => res.json())
			.then((events: { created_at: string }[]) => {
				if (events[0]) setLastActive(formatRelativeTime(new Date(events[0].created_at)));
			})
			.catch(() => {});
	}, []);

	if (lastActive === null) return null;

	return (
		<a href="https://github.com/JulienLach" target="_blank" rel="noopener" className="github-activity">
			Actif sur GitHub {lastActive}
		</a>
	);
}
