"use client";

import { Check, Footprints, Glasses, Shirt, Smile, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "./components/Icon";
import data from "./items.json";

const faces = data.faces.map((e) => e);
const clothes = data.clothes.map((e) => e);

export default function Home() {
	const [face, setFace] = useState<number>();
	const [cloth, setCloth] = useState<number>();
	const [leftOpen, setLeft] = useState(false);
	const [rightOpen, setRight] = useState(false);
	const [faceOpen, setFaceOpen] = useState(false);
	const [clothOpen, setClothOpen] = useState(false);
	const [acessOpen, setAcess] = useState(false);
	const [shoeOpen, setShoe] = useState(false);
	return (
		<main className="flex w-screen h-screen items-center justify-center gap-10 bg-pink-950">
			{!leftOpen && (
				<div className="h-36 w-24 flex flex-col justify-between items-end">
					<Icon
						icon={Shirt}
						onClick={() => {
							setClothOpen(true);
							setLeft(true);
						}}
					/>
					<Icon
						onClick={() => {
							setFaceOpen(true);
							setLeft(true);
						}}
						className="self-center fill-none"
						icon={Smile}
					/>
					<Icon icon={X} className="stroke-[3px]" />
				</div>
			)}
			{faceOpen && (
				<div className="flex flex-col relative w-[12rem] rounded-md overflow-hidden ">
					<div className="sticky bg-pink-200 text-pink-950 p-2 w-full  top-0 left-0 right-0 flex justify-between">
						<h1 className="font-black">FACES</h1>
						<X
							onClick={() => {
								setLeft(false);
								setFaceOpen(false);
							}}
							className="place-self-end"
						/>
					</div>
					<div className="grid grid-cols-3 auto-rows-min overflow-hidden flex-wrap overflow-y-scroll h-[12rem] px-2 pb-2 bg-pink-200 items-center">
						{data.faces.map((e) => (
							<Image
								onClick={() => setFace(e.id)}
								className="border-2 border-rose-300 bg-pink-50 fill-rose-950 m-1 rounded-lg"
								key={e.id}
								width={50}
								height={50}
								src={e.url}
								alt={e.name}
							/>
						))}
					</div>
				</div>
			)}
			{clothOpen && (
				<div className="flex flex-col relative w-[12rem] rounded-md overflow-hidden ">
					<div className="sticky bg-pink-200 text-pink-950 p-2 w-full  top-0 left-0 right-0 flex justify-between">
						<h1 className="font-black">CLOTHES</h1>
						<X
							onClick={() => {
								setLeft(false);
								setClothOpen(false);
							}}
							className="place-self-end"
						/>
					</div>
					<div className="grid grid-cols-3 auto-rows-min overflow-hidden flex-wrap overflow-y-scroll h-[12rem] px-2 pb-2 bg-pink-200 items-center">
						{clothes.map((e) => (
							<Image
								onClick={() => setCloth(e.id)}
								className="border-2 border-rose-300 bg-pink-50 fill-rose-950 m-1 rounded-lg"
								key={e.id}
								width={50}
								height={50}
								src={e.url}
								alt={e.name}
							/>
						))}
					</div>
				</div>
			)}
			<div className="bg-pink-200 rounded-lg font-black text-lg text-pink-950 flex items-center justify-center w-[12rem] h-[20rem] ">
				<div className="relative flex items-center justify-center border-pink-950 rounded-3xl w-[5rem] h-[10rem]">
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
								className=" fill-white stroke-white absolute top-[-3.5rem] scale-[1.15]"
								key={e.id}
								width={100}
								height={100}
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
								className="absolute top-[0.9rem] scale-[2.6]"
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
			{!rightOpen && (
				<div className="h-36 w-24 flex flex-col justify-between items-start">
					<Icon
						onClick={() => {
							setAcess(true);
							setRight(true);
						}}
						icon={Glasses}
					/>
					<Icon
						onClick={() => {
							setShoe(true);
							setRight(true);
						}}
						className="self-center"
						icon={Footprints}
					/>
					<Icon
						onClick={() => setFace(2)}
						icon={Check}
						className="fill-none stroke-[3px]"
					/>
				</div>
			)}
			{acessOpen && (
				<div className="flex flex-col relative w-[12rem] rounded-md overflow-hidden ">
					<div className="sticky bg-pink-200 text-pink-950 p-2 w-full  top-0 left-0 right-0 flex justify-between">
						<h1 className="font-black">ACESSORIES</h1>
						<X
							onClick={() => {
								setRight(false);
								setAcess(false);
							}}
							className="place-self-end"
						/>
					</div>
					<div className="grid grid-cols-3 auto-rows-min overflow-hidden flex-wrap overflow-y-scroll h-[12rem] px-2 pb-2 bg-pink-200 items-center">
						{data.faces.map((e) => (
							<Image
								onClick={() => setFace(e.id)}
								className="border-2 border-rose-300 bg-pink-50 fill-rose-950 m-1 rounded-lg"
								key={e.id}
								width={50}
								height={50}
								src={e.url}
								alt={e.name}
							/>
						))}
					</div>
				</div>
			)}
			{shoeOpen && (
				<div className="flex flex-col relative w-[12rem] rounded-md overflow-hidden ">
					<div className="sticky bg-pink-200 text-pink-950 p-2 w-full  top-0 left-0 right-0 flex justify-between">
						<h1 className="font-black">SHOES</h1>
						<X
							onClick={() => {
								setRight(false);
								setShoe(false);
							}}
							className="place-self-end"
						/>
					</div>
					<div className="grid grid-cols-3 auto-rows-min overflow-hidden flex-wrap overflow-y-scroll h-[12rem] px-2 pb-2 bg-pink-200 items-center">
						{data.faces.map((e) => (
							<Image
								onClick={() => setFace(e.id)}
								className="border-2 border-rose-300 bg-pink-50 fill-rose-950 m-1 rounded-lg"
								key={e.id}
								width={50}
								height={50}
								src={e.url}
								alt={e.name}
							/>
						))}
					</div>
				</div>
			)}
		</main>
	);
}
