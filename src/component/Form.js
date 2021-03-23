import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {createUser} from '../feature/userSlice';
import './Form.css';
import Validation from './Validation';


function Form() {
	const [ userRegistration, setUserRegistration ] = useState({
		username: '',
		email: '',
		phone: '',
		password: ''
	});
	const [ records, setRecords ] = useState([]);
	const [ errors, setErrors ] = useState({});
	const dispatch = useDispatch();

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUserRegistration({ ...userRegistration, [name]: value });
	};
	const renderTable = () => {
		return records.map((curElem, index) => {
			return (
				<tr key={curElem.id}>
				 
					<td>{index+1}</td>
					<td>{curElem.username}</td>
					<td>{curElem.email}</td>
					<td>{curElem.phone}</td>
				   
				  
					
				</tr>
			);
		});
	};

	const isEmpty = (obj) => {
		return Object.keys(obj).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		var error_holder = Validation(userRegistration)
		setErrors(error_holder);
		console.log(error_holder)
		
		if (isEmpty(error_holder)){
			setRecords([ ...records, { ...userRegistration, id: new Date().getTime().toString() } ])
			setUserRegistration({ username: '', email: '', phone: '', password: '' });
		}
		
		
		dispatch(
			createUser({
				name:userRegistration.username,
				email:userRegistration.email,
				phone:userRegistration.phone,
				password:userRegistration.password
			})
		);
		
	};

	return (
		<div className="container1">
			<form action="" onSubmit={(event) => handleSubmit(event)}>
				<div>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						autoComplete="off"
						value={userRegistration.username}
						onChange={(e) => handleInput(e)}
						name="username"
						id="username"
					/>
					{errors.username && <p className="error">{errors.username}</p>}
				</div>

				<div>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						autoComplete="off"
						value={userRegistration.email}
						onChange={(e) => handleInput(e)}
						name="email"
						id="email"
					/>
					{errors.email && <p className="error">{errors.email}</p>}
				</div>

				<div>
					<label htmlFor="phone">Phone</label>
					<input
						type="text"
						autoComplete="off"
						value={userRegistration.phone}
						onChange={(e) => handleInput(e)}
						name="phone"
						id="phone"
					/>
					{errors.phone && <p className="error">{errors.phone}</p>}
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input
						type="Password"
						autoComplete="off"
						value={userRegistration.password}
						onChange={(e) => handleInput(e)}
						name="password"
						id="password"
					/>
					{errors.password && <p className="error">{errors.password}</p>}
				</div>
				<button className="btn1" type="submit">
					Submit
				</button>
			</form>
			
			<div className="Demo-header">
			<table  id="users">
				<thead>
					<tr>
						<th>id</th>
						<th>username</th>
						<th>email</th>
						<th>phone</th>
						
					</tr>
				</thead>
				<tbody>{renderTable()}</tbody>
			</table>
			</div>
			

			
		</div>
	);
}

export default Form;
