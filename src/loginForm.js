import React from 'react';
import {userPostFetch} from "./actions/Requests";
import {Link} from 'react-router-dom';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.Masseges = this.Masseges;
        this.handleChange = this.handleChange.bind(this);
        this.signRequest = this.signRequest.bind(this);
        this.state = {
            msg: {
                status:"none",
            },
            data:{
                email:'',
                password:'',
                check:''
            }

        }
    }
    async signRequest(props){
        let query = '?email='+props.email+'&password='+props.password;
        console.log(props);
        let data;
        await fetch('http://localhost:8000/auth/login'+query)
            .then(event=>{
                console.log(event);
                data=event;
            });
        document.getElementById('submit-text').classList.remove('d-none')
        document.getElementById('spinner').classList.add('d-none');
        return(
            <div><data/></div>
        )
    }
    handleChange(event){
        const target = event.target;
        switch(target.id){
            case 'emailInput':
                this.setState({data:{email:target.value}});
                break;
            case 'exampleInputPassword1':
                this.setState({data:{password:target.value}});
                break;
        }
    }
    Masseges(prop) {
        switch (prop.status) {
            case 'unsuccess':
                return (
                    <div>
                        <div id={'unsuccessful-alert'} className="alert alert-danger text-center">
                            unsuccessful
                        </div>
                    </div>
                );
            case 'success':
                return (
                    <div>
                        <div id={'unsuccessful-alert'} className="alert alert-success text-center">
                            successful
                        </div>

                    </div>
                );
            case 'none':
                return <div></div>
                break;
        }
    }

    formSubmit(event) {
        event.preventDefault();
        document.getElementById('submit-text').classList.add('d-none')
        document.getElementById('spinner').classList.remove('d-none');
        let data={
            email:document.getElementById('emailInput').value,
                password:document.getElementById('exampleInputPassword1').value
            };
        console.log(document.getElementById('emailInput').value+' : '+document.getElementById('exampleInputPassword1').value)
        console.log(this.state.data.email+' + '+this.state.data.password);
        //this.signRequest(data);
        userPostFetch(data);
    }



    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="d-flex justify-content-center">
                        <div className="mt-100 border shadow-lg p-3 mb-5 bg-white rounded p-5">
                            <form onSubmit={this.formSubmit} id={'auth-form'} className={"login-form"}>
                                <div className="btn-group d-block mb-3" style={{weight: '100%'}}>
                                    <Link to={"/sign"} className="w-50 btn btn-primary active" aria-current="page">Log In</Link>
                                    <Link to={"/register"} className="w-50 btn btn-primary">Register</Link>
                                </div>
                                <div className="rounded mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" id="emailInput" name="email" className="form-control" onChange={this.handleChange}
                                           aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handleChange}/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <div id={'unsuccessful-alert'} className="alert alert-danger text-center"
                                     style={{display: "none"}}>
                                </div>
                                <this.Masseges status={this.state.msg.status}/>
                                <button type="submit" className="w-100 btn btn-primary d-flex justify-content-center"><span id={"submit-text"}>Log in</span>
                                    <div className="spinner-border d-none text-light" id={"spinner"} role="status">
                                        <span className="visually-hidden">Загрузка...</span>
                                    </div></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export {LoginForm};