import React, { useState } from 'react'

const EventHandling = () => {

	const [upvotes, setupvotes] = useState(0)

	const [mycolor, setMycolor] = useState('#eee')

	  let likes = 0;

	  const increaseLikes = () =>{
		likes++;
		console.log(likes)
	  }

	  const increaseUpvotes = () => {
		//upvotes++; ❌wrong
		setupvotes( upvotes + 1);   //✅right
	  }
	return (
	<div style={{backgroundColor: mycolor , height: '100vh', padding : 50}}>
		<h1>EventHandling Component</h1>

		<hr />

		<button className="btn btn-primary" onClick={ () => { alert('Knock Knock😂') } }>Click event handling</button>
		<br />
		<input type="text" onChange={ (e) => { console.log(e.target.value)  } } />
        <br />

		<input type="color" onChange={  (e) => {setMycolor(e.target.value)}  }/>
		<br />
        
        <button className='btn btn-danger mt-4' onClick={increaseLikes}>Add a Like</button>
        <h1>👍{likes}</h1>

		<button className='btn btn-danger mt-4' onClick={increaseUpvotes}>Add an Upvotes</button>

		<h1>🔼{upvotes}</h1>

		<input type="range" class="form-range" id="customRange1" onChange={ (e)=> {console.log(e.target.value);}} />

	</div>
	)
}

export default EventHandling;