import React from 'react'


export default function ApplicationUser(props) {
    return (
        <>
            <h1>Sign Up User</h1>
            {/* <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name"></input>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name"></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" id="inputPassword4"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity"></input>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPhone">Phone</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="123-456-7890"></input>
                </div>
                <form class="form-inline">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Job</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>Choose...</option>
                        <option value="1">Full-Time</option>
                        <option value="2">Part-Time</option>
                        <option value="3">No Job</option>
                        <option value="3">Remote</option>
                    </select>
                </form>
                <form class="form-inline">
                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Living Place</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                        <option selected>Choose ...</option>
                        <option value="1">House with Garden</option>
                        <option value="2">Apartment with Garden</option>
                        <option value="3">Rented Apartment</option>
                        <option value="3">Rented House</option>
                        <option value="4">House with Garden</option>
                        <option value="5">Apartment with Garden</option>
                        <option value="6">Owned Apartment</option>
                        <option value="7">Owned House</option>
                    </select>
                </form>
                <div>
                    <p>Additional household Members</p>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                        <label class="form-check-label" for="inlineRadio1">Dogs</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                        <label class="form-check-label" for="inlineRadio2">Cats</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                        <label class="form-check-label" for="inlineRadio3">Children</label>
                    </div>
                </div>



                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}
           <form onSubmit={props.onSignUp} >
            <div className="form-group">
                <label htmlFor="exampleFullName">Full Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="full_name" />
                <small id="full_name" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input name="email" className="form-control" id="exampleInputEmail1" />
                <small id="email" className="form-text text-muted"></small></div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleShelterName">Shelter Name</label>
                <input type="text" className="form-control" id="exampleShelterName" name="shelter_name"  />
                <small id="shelter_name" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Location</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="location"  />
                <small id="location" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleDescription">Description</label>
                <input name="description" type="text" className="form-control" />
                <small id="description" className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleUrl">Shelter Website</label>
                <input name="url" type="text" className="form-control"  />
                <small id="url" className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    )
}