import { Await } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { CardContact } from "../components/CardContact.jsx";
const username = "lalba10col";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const API = "https://playground.4geeks.com/contact";
	const getContacts = async () => {
		try {
			const response = await fetch(`${API}/agendas/${username}/contacts`);
			if (!response.ok) {
				throw new Error("No Funcionó la Consulta");
			}
			const data = await response.json();
			dispatch({
				type: 'set_contacts',
				payload: { contact: data.contacts }
			})
		}
		catch (error) {
			console.error(error)

		}
	}
	useEffect(()=>{getContacts()},[])
console.log(store.contacts)
	return (
		<div className="container mt-5">
			<div className="row">
				{store.contacts.map((contact,index)=>{
					return(
						<CardContact key = {contact.id} name = {contact.name} phone = {contact.phone} email={contact.email} address = {contact.address}/>
					)
				})}	
				</div>
		</div>
	);
};