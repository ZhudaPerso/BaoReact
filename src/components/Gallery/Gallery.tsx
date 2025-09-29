import img1 from "@/assets/gallery/1.jpeg";
import img2 from "@/assets/gallery/2.jpeg";
import img3 from "@/assets/gallery/3.jpeg";
import img4 from "@/assets/gallery/4.jpeg";

const Gallery = () => {
	return (
		// <!-- 作品集 -->
		<section id="gallery" className="py-8 scroll-mt-4 md:scroll-mt-8">
			<div className="mx-auto max-w-6xl px-4">
				<h2 className="text-2xl font-semibold">
					Réalisations récentes
				</h2>
				<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
					<img
						className="rounded-2xl object-cover w-full h-56"
						src={img1}
						alt="Onglerie_1"
					/>
					<img
						className="rounded-2xl object-cover w-full h-56"
						src={img2}
						alt="Onglerie_2"
					/>
					<img
						className="rounded-2xl object-cover w-full h-56"
						src={img3}
						alt="Extension_des_cils_1"
					/>
					<img
						className="rounded-2xl object-cover w-full h-56"
						src={img4}
						alt="Extension_des_cils_2"
					/>
				</div>
				<p className="mt-6 text-center text-sm text-slate-600">
					Voir plus de réalisations sur{" "}
					<a
						href="https://www.instagram.com/bao_beaute/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-amber-600 hover:underline"
					>
						Instagram
					</a>
				</p>
			</div>
		</section>
	);
};

export default Gallery;
