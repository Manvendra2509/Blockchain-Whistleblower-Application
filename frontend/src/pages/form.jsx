import Navbar from "../components/Navbar";

function Form(){
    return(
       <section>
				<Navbar></Navbar>

					<div className="flex justify-evenly w-full pt-8">
						<div className="w-7/12 bg-base-100 px-3 py-3">
							<h1 className="text-xl font-bold tracking-wider">Submit New Disclosure!</h1>
						<div className="form-control w-full py-5">
						<label className="label">
							<span className="label-text font-medium text-lg">Title:</span>
						</label>
						<input type="text" placeholder="Type here" className="input input-bordered w-full bg-base-200" />
					</div>

					<div className="form-control w-full py-2.5">
						<label className="label">
							<span className="label-text font-medium text-lg">Discription:</span>
						</label>
						<textarea placeholder="Type here" className="textarea textarea-bordered h-24 w-full bg-base-200"></textarea> 
					</div>
					<div className="form-control w-full py-5">
						<label className="label">
							<span className="label-text font-medium text-lg">Proof:</span>
						</label>
						<input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
					</div>

					<div className="form-control w-32 py-7 mx-auto">
						<button className="btn btn-active btn-accent text-lg font-bold rounded text-white tracking-wide">Submit</button>
					</div>
				</div>
						
						<div className="w-4/12 px-3 py-3">
							<div className="alert alert-warning shadow-lg w-full">
  							<div className="justify-center w-full">
    							<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    							<span className="text-xl font-bold tracking-wider text-red-700">Disclaimer!</span>
									<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  							</div>
							</div>
							<div className="text-justify mt-9 text-lg px-7 tracking-wide">
								Please ensure that all cases submitted through this app are truthful and authentic. False information can undermine the effectiveness of our platform and may have legal consequences. Please provide supporting evidence and your identity will be kept confidential to the extent possible. Thank you for your commitment to ethical conduct.
							</div>
						</div>
				</div> 



       </section>
    )
}

export default Form;
