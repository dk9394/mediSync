import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	specialities = [
		{
			speciality: 'General physician',
			image: 'assets/General_physician.svg',
		},
		{
			speciality: 'Gynecologist',
			image: 'assets/Gynecologist.svg',
		},
		{
			speciality: 'Dermatologist',
			image: 'assets/Dermatologist.svg',
		},
		{
			speciality: 'Pediatricians',
			image: 'assets/Pediatricians.svg',
		},
		{
			speciality: 'Neurologist',
			image: 'assets/Neurologist.svg',
		},
		{
			speciality: 'Gastroenterologist',
			image: 'assets/Gastroenterologist.svg',
		},
	];

	doctors = [
		{
			_id: 'doc1',
			name: 'Dr. Richard James',
			image: 'assets/doc1.png',
			speciality: 'General physician',
			degree: 'MBBS',
			experience: '4 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 50,
			address: {
				line1: '17th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc2',
			name: 'Dr. Emily Larson',
			image: 'assets/doc2.png',
			speciality: 'Gynecologist',
			degree: 'MBBS',
			experience: '3 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 60,
			address: {
				line1: '27th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc3',
			name: 'Dr. Sarah Patel',
			image: 'assets/doc3.png',
			speciality: 'Dermatologist',
			degree: 'MBBS',
			experience: '1 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 30,
			address: {
				line1: '37th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc4',
			name: 'Dr. Christopher Lee',
			image: 'assets/doc4.png',
			speciality: 'Pediatricians',
			degree: 'MBBS',
			experience: '2 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 40,
			address: {
				line1: '47th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc5',
			name: 'Dr. Jennifer Garcia',
			image: 'assets/doc5.png',
			speciality: 'Neurologist',
			degree: 'MBBS',
			experience: '4 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 50,
			address: {
				line1: '57th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc6',
			name: 'Dr. Andrew Williams',
			image: 'assets/doc6.png',
			speciality: 'Neurologist',
			degree: 'MBBS',
			experience: '4 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 50,
			address: {
				line1: '57th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc7',
			name: 'Dr. Christopher Davis',
			image: 'assets/doc7.png',
			speciality: 'General physician',
			degree: 'MBBS',
			experience: '4 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 50,
			address: {
				line1: '17th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc8',
			name: 'Dr. Timothy White',
			image: 'assets/doc8.png',
			speciality: 'Gynecologist',
			degree: 'MBBS',
			experience: '3 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 60,
			address: {
				line1: '27th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc9',
			name: 'Dr. Ava Mitchell',
			image: 'assets/doc9.png',
			speciality: 'Dermatologist',
			degree: 'MBBS',
			experience: '1 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 30,
			address: {
				line1: '37th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc10',
			name: 'Dr. Jeffrey King',
			image: 'assets/doc10.png',
			speciality: 'Pediatricians',
			degree: 'MBBS',
			experience: '2 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 40,
			address: {
				line1: '47th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc11',
			name: 'Dr. Zoe Kelly',
			image: 'assets/doc11.png',
			speciality: 'Neurologist',
			degree: 'MBBS',
			experience: '4 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 50,
			address: {
				line1: '57th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc12',
			name: 'Dr. Patrick Harris',
			image: 'assets/doc12.png',
			speciality: 'Neurologist',
			degree: 'MBBS',
			experience: '4 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 50,
			address: {
				line1: '57th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc13',
			name: 'Dr. Chloe Evans',
			image: 'assets/doc13.png',
			speciality: 'General physician',
			degree: 'MBBS',
			experience: '4 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 50,
			address: {
				line1: '17th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc14',
			name: 'Dr. Ryan Martinez',
			image: 'assets/doc14.png',
			speciality: 'Gynecologist',
			degree: 'MBBS',
			experience: '3 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 60,
			address: {
				line1: '27th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
		{
			_id: 'doc15',
			name: 'Dr. Amelia Hill',
			image: 'assets/doc15.png',
			speciality: 'Dermatologist',
			degree: 'MBBS',
			experience: '1 Years',
			about:
				'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
			fees: 30,
			address: {
				line1: '37th Cross, Richmond',
				line2: 'Circle, Ring Road, London',
			},
		},
	];
}
