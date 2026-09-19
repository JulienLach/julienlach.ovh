import { useEffect, useState } from 'react';

type LightboxImage = { src: string; alt: string };

type Props = {
	image: LightboxImage | null;
	onClose: () => void;
};

export default function Lightbox({ image, onClose }: Props) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (!image) return;
		const raf1 = requestAnimationFrame(() => {
			requestAnimationFrame(() => setVisible(true));
		});
		return () => cancelAnimationFrame(raf1);
	}, [image]);

	useEffect(() => {
		if (!image) return;
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape') close();
		}
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [image]);

	function close() {
		setVisible(false);
		setTimeout(onClose, 200);
	}

	if (!image) return null;

	return (
		<div id="lightbox" className={`open${visible ? ' visible' : ''}`} onClick={close}>
			<img id="lightbox-img" src={image.src} alt={image.alt} />
		</div>
	);
}
