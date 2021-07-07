import {FC, useState} from 'react';
import { Link } from 'react-router-dom';

type Contact = {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface Props {
    match: any;
}

const data: Contact[] = [
    {
        id: 1,
        name: 'Julio Arranz',
        email: 'julio.arranz@email.com',
        phone: '666-777-888'
    },
    {
        id: 2,
        name: 'Aleix Riba',
        email: 'aleix.riba@email.com',
        phone: '699-755-899'
    },
    {
        id: 3,
        name: 'Jose Ortega',
        email: 'jose.ortega@email.com',
        phone: '619-721-976'
    },
]

const Contacts: FC<Props> = ({match}) => {
    const [contacts] = useState<Contact[]>(data)

    let selectedContact = null;
    const {params: {id}} = match

    if (id) {
        selectedContact = contacts.find((contact: Contact) => contact.id === Number(id))
    }

    const renderSingleContact = ({name, email, phone}: Contact) => (
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )

    const renderContacts = () => (
        <ul>
            {contacts.map((contact: Contact) => (
                <li key={contact.id}>
                    <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
                </li>
            ))}
        </ul>
    )

    return (
        <>
            <h1>Contacts</h1>
            {selectedContact
            ? renderSingleContact(selectedContact)
            : renderContacts()}
        </>
    )
}

export default Contacts;