import React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const handleSubmit = async (event:any) => {
  event.preventDefault()
  const data = {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value,
  }

  const JSONdata = JSON.stringify(data)
  const endpoint = 'http://54.169.31.224:3000/signup'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  }
  const MySwal = withReactContent(Swal);

  

  fetch(endpoint, options)
    .then((response) => response.json())
    .then(function(res){
      if(res.error){
        let msg = 'Something went wrong!';
        let property = res.msg[0]['property'];
        let value = res.msg[0]['value'] ?? null;
        if(property && !value){
          msg = property + ' cannot be empty';
        } else if(property && value){
          msg = value + ' is an invalid ' + property;
        }
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: msg,
          footer: 'Retry with correct values'
        })
      } else {
        let msg = res['message'];
        MySwal.fire({
          icon: 'success',
          title: 'Congrats!',
          text: msg
        })
      }
      
    })
    .catch((err) => {
      console.log(err)
    });

}

const FormSection = () => {
  return (
    <div className='max-w-7xl mx-auto my-16' id='form'>
      <div className='p-16 bg-yellowAccent rounded-2xl'>
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-justify-between">

          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">

            <h1 className="my-4 text-3xl font-semibold leading-tight">Receive payments quickly from anywhere</h1>
            <p className="leading-normal text-lg mb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis natus fuga facere.</p>

          </div>

          <div className="card md:w-3/5 py-6 text-center">
            <div className="container  flex flex-col items-center">
              <form className="w-80 p-4 flex flex-col" onSubmit={handleSubmit}>
                <h1 className='text-Red text-xl py-2 text-left'>Get started for free</h1>
                <input type="text" id="name" name="name" placeholder="Enter your name" className="mb-3 py-3 px-4 border-none  rounded-md " />
                <input type="email" id="email" name="email" placeholder="Enter your email" className="mb-3 py-3 px-4  border-none  rounded-md" />
                <input type="password" id='password' name="password" placeholder="Password" className="mb-3 py-3 px-4  border-none  rounded-md" />
                <button type='submit' className=" bg-Yellow p-3 rounded-lg font-semibold text-lg ">GET STARTED</button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default FormSection