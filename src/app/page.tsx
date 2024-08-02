"use client";

import { Cat, Check, Glasses, Shirt, Smile, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "./components/Icon";
import data from "./items.json";

const faces = data.faces.map((e) => e);
const clothes = data.clothes.map((e) => e);
const acessories = data.acess.map((e) => e);
const heads = data.heads.map((e) => e);

export default function Home() {
	const [face, setFace] = useState<number>();
	const [cloth, setCloth] = useState<number>();
	const [acess, setAcess] = useState<number>();
	const [head, setHead] = useState<number>();
	const [start, setStart] = useState(false);
	const [leftOpen, setLeft] = useState(false);
	const [rightOpen, setRight] = useState(false);
	const [faceOpen, setFaceOpen] = useState(false);
	const [clothOpen, setClothOpen] = useState(false);
	const [acessOpen, setAcessOpen] = useState(false);
	const [headOpen, setHeadOpen] = useState(false);
	return (
		<>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				onClick={() => setStart(true)}
				className={`${start && "translate-y-[-200%]"} duration-[2s] w-screen flex-col h-screen gap-2 flex transition-all ease-in-out items-center justify-center z-10 bg-gradient-to-br from-pink-600 via-pink-700 to-rose-500 absolute`}
			>
				<h1 className="font-bold text-6xl ">Bem vindo ao</h1>
				<Image src={"/Logo.png"} width={400} height={400} alt="Logo" />
				<p className="text-xl">Clique para iniciar!</p>
			</div>
			<main className="flex w-screen h-screen items-center justify-center gap-10 bg-pink-950">
				<div
					className={`${leftOpen && "pointer-events-none opacity-0"} h-72 min-w-48 w-0 transition-all duration-500  flex flex-col justify-between items-end`}
				>
					<Icon
						icon={Shirt}
						onClick={() => {
							setClothOpen(true);
							setLeft(true);
							setRight(true);
						}}
					/>
					<Icon
						onClick={() => {
							setFaceOpen(true);
							setLeft(true);
							setRight(true);
						}}
						className="self-center fill-none"
						icon={Smile}
					/>
					<Icon icon={X} className="stroke-[3px]" />
				</div>
				{/* FACES MENU */}
				<div
					className={`${!faceOpen && "pointer-events-none opacity-0 min-w-0 w-0"} ${faceOpen && " min-w-[24rem] w-[24rem]"}  flex flex-col relative transition-all duration-500	 rounded-md overflow-hidden `}
				>
					<div className="sticky bg-pink-200 text-pink-950 p-4 w-full  top-0 left-0 right-0 flex justify-between">
						<h1 className="font-black text-4xl">ROSTOS</h1>
						<X
							onClick={() => {
								setLeft(false);
								setRight(false);
								setFaceOpen(false);
							}}
							className="place-self-end size-12"
						/>
					</div>
					<div className="grid grid-cols-3 auto-rows-min overflow-hidden flex-wrap overflow-y-scroll min-h-[24rem] max-h-[24rem] px-2 pb-2 bg-pink-200 items-center">
						{faces.map((e) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								key={e.id}
								onClick={() => setFace(e.id)}
								className="border-2 w-[7rem] h-[7rem] relative border-rose-300 bg-pink-50 fill-rose-950 m-1 rounded-lg"
							>
								<Image
									className="absolute top-12 scale-[2]"
									width={1000000}
									height={1000000}
									src={e.url}
									alt={e.name}
								/>
							</div>
						))}
					</div>
				</div>
				{/* CLOTHES MENU */}
				<div
					className={`${!clothOpen && "pointer-events-none opacity-0 min-w-0 w-0"} ${clothOpen && " min-w-[24rem] w-[24rem]"}  flex transition-all duration-500 flex-col relative  rounded-md overflow-hidden `}
				>
					<div className="sticky bg-pink-200 text-pink-950 p-4 w-full  top-0 left-0 right-0 flex justify-between">
						<h1 className="font-black text-4xl">ROUPAS</h1>
						<X
							onClick={() => {
								setLeft(false);
								setRight(false);
								setClothOpen(false);
							}}
							className="place-self-end size-12"
						/>
					</div>
					<div className="grid grid-cols-3 auto-rows-min overflow-hidden flex-wrap overflow-y-scroll min-h-[24rem] max-h-[24rem] px-1 pb-1 bg-pink-200 items-center">
						{clothes.map((e) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								key={e.id}
								onClick={() => setCloth(e.id)}
								className="border-2 w-[7rem] h-[10rem] relative  border-rose-300 bg-pink-50 fill-rose-950 m-1 rounded-lg"
							>
								<Image
									className="absolute top-[-1.5rem] scale-[1.5]"
									width={1000}
									height={1000}
									src={e.url}
									alt={e.name}
								/>
							</div>
						))}
					</div>
				</div>

				{/* MODEL */}
				<div className="bg-pink-200 rounded-lg font-black text-lg text-pink-950 flex items-center justify-center min-w-[24rem] min-h-[40rem] ">
					<div className="relative flex items-center justify-center border-pink-950 rounded-3xl w-[10rem] h-[20rem]">
						<Image
							className=" m-1 scale-[2] relative rounded-lg size-full"
							width={1000}
							height={1000}
							src="/model.svg"
							alt={"a"}
						/>
						{faces.flatMap((e) =>
							e.id === Number(face) ? (
								<Image
									layout="responsive"
									className=" absolute top-6 scale-[2.6]"
									key={e.id}
									width={100}
									height={10}
									src={e.url}
									alt={e.name}
								/>
							) : (
								false
							),
						)}
						{clothes.flatMap((e) =>
							e.id === Number(cloth) ? (
								<Image
									className="absolute top-[1.8rem] z-10 scale-[2.6]"
									key={e.id}
									width={1000}
									height={1000}
									src={e.url}
									alt={e.name}
								/>
							) : (
								false
							),
						)}
						{acessories.flatMap((e) =>
							e.id === Number(acess) ? (
								<Image
									className="absolute top-[1.8rem] scale-[2.6] z-10"
									key={e.id}
									width={1000}
									height={1000}
									src={e.url}
									alt={e.name}
								/>
							) : (
								false
							),
						)}
						{heads.flatMap((e) =>
							e.id === Number(head) ? (
								<Image
									className="absolute top-[1.8rem] scale-[2.6]"
									key={e.id}
									width={1000}
									height={1000}
									src={e.url}
									alt={e.name}
								/>
							) : (
								false
							),
						)}
					</div>
				</div>
				{/* ACESSORIES MENU */}
				<div
					className={`${!acessOpen && "pointer-events-none opacity-0 min-w-0 w-0"} ${acessOpen && " min-w-[24rem] w-[24rem]"} flex transition-all duration-500 flex-col relative rounded-md overflow-hidden `}
				>
					<div className="sticky bg-pink-200 text-pink-950 p-4 w-full  top-0 left-0 right-0 flex justify-between">
						<h1 className="font-black text-4xl">ACESSÓRIOS</h1>
						<X
							onClick={() => {
								setRight(false);
								setLeft(false);
								setAcessOpen(false);
							}}
							className="place-self-end size-12"
						/>
					</div>
					<div className="grid grid-cols-3 auto-rows-min overflow-hidden flex-wrap overflow-y-scroll min-h-[24rem] max-h-[24rem] px-2 pb-2 bg-pink-200 items-center">
						{acessories.map((e) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								key={e.id}
								onClick={() => setAcess(e.id)}
								className="border-2 w-[7rem] h-[7rem] relative border-rose-300 bg-pink-50 fill-rose-950 m-1 rounded-lg"
							>
								<Image
									className="absolute top-20 scale-[2]"
									width={1000000000}
									height={1000000000}
									src={e.url}
									alt={e.name}
								/>
							</div>
						))}
					</div>
				</div>
				{/* HEADS MENU */}
				<div
					className={`${!headOpen && "pointer-events-none opacity-0 min-w-0 w-0"} ${headOpen && " min-w-[24rem] w-[24rem]"} flex flex-col relative transition-all duration-500 rounded-md overflow-hidden `}
				>
					<div className="sticky bg-pink-200 text-pink-950 p-4 w-full  top-0 left-0 right-0 flex justify-between">
						<h1 className="font-black text-4xl">CABEÇAS</h1>
						<X
							onClick={() => {
								setRight(false);
								setLeft(false);
								setHeadOpen(false);
							}}
							className="place-self-end size-12"
						/>
					</div>
					<div className="grid grid-cols-3 auto-rows-min overflow-hidden flex-wrap overflow-y-scroll min-h-[24rem] max-h-[24rem] px-2 pb-2 bg-pink-200 items-center">
						{heads.map((e) => (
							// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<div
								key={e.id}
								onClick={() => setHead(e.id)}
								className="border-2 w-[7rem] h-[7rem] relative border-rose-300 bg-pink-50 fill-rose-950 m-1 rounded-lg"
							>
								<Image
									className="absolute top-20 scale-[2]"
									width={1000000}
									height={1000000}
									src={e.url}
									alt={e.name}
								/>
							</div>
						))}
					</div>
				</div>
				{/* RIGHT BUTTONS */}
				<div
					className={`${rightOpen && "pointer-events-none opacity-0 w-0"} transition-all duration-500 h-72 w-48 flex flex-col justify-between items-start`}
				>
					<Icon
						onClick={() => {
							setAcessOpen(true);
							setLeft(true);
							setRight(true);
						}}
						icon={Glasses}
					/>
					<Icon
						onClick={() => {
							setHeadOpen(true);
							setLeft(true);
							setRight(true);
						}}
						className="self-center"
						icon={Cat}
					/>
					<Icon icon={Check} className="fill-none stroke-[3px]" />
				</div>
				{/* Credits! */}
			</main>
			<div className="z-20 absolute left-0 text-xl bottom-0 p-5">
				<h1>
					Arte por{" "}
					<a
						className="underline"
						href="https://www.instagram.com/apinkfkingrat/"
					>
						@apinkfkingrat
					</a>
				</h1>
				<h1>
					Código por{" "}
					<a className="underline" href="https://www.github.com/Buskik">
						@buskik
					</a>
				</h1>
			</div>
		</>
	);
}
