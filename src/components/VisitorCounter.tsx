import { useEffect, useRef, useState } from 'react';

const COUNTER_URL = 'https://abacus.jasoncameron.dev/hit/julienlach.ovh/site-visits';

export default function VisitorCounter() {
	const [visits, setVisits] = useState<number | null>(null);
	const hasFetched = useRef(false);

	useEffect(() => {
		if (hasFetched.current) return;
		hasFetched.current = true;

		fetch(COUNTER_URL)
			.then((res) => res.json())
			.then((data: { value: number }) => setVisits(data.value))
			.catch(() => {});
	}, []);

	if (visits === null) return null;

	return <p className="visitor-counter">{visits.toLocaleString()} visits</p>;
}
