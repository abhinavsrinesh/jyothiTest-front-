function Hom() {
    return (
        <div>
            <div class="head1" style={{
                backgroundColor: 'darkslategray',
                height: '100%',
                backgroundImage: 'url(https://th.bing.com/th/id/OIP.hremi8gd-ZJvIu57BjESQQHaDS?w=270&h=155&c=7&r=0&o=5&pid=1.7)',
                minHeight: '800px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div class="navbar" style={{
                    display: 'flex',
                    color: 'darkgoldenrod',
                    textShadow: '0 0 3px #ff0000',
                    justifyContent: 'left',
                    fontSize: 'larger'
                }}>
                    <h1> WELCOME </h1>
                </div>
            </div>

            <div class="savio" style={{
                color: 'black',
                paddingTop: '50px',
                paddingRight: '30px',
                paddingBottom: '10px',
                paddingLeft: '80px',
                textAlign: 'center',
                fontSize: 'medium',
                fontFamily: 'Arial, Helvetica, sans-serif',
                padding: '200px', // This might be excessive padding
                fontSize: 'large',
                backgroundImage: 'url(https://th.bing.com/th/id/OIP.tBUMLNPXdxETysKRhixGaQHaE8?w=244&h=180&c=7&r=0&o=5&pid=1.7)',
                minHeight: '500px',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <p> Here We Provide Various Ideas For Effective Money Managment </p>
                <div class="navbar1" style={{
                    textAlign: 'center',
                    color: 'tomato'
                }}>
                    <button>Login</button>
                </div>

                <div class="navbar2" style={{
                    textAlign: 'center',
                    fontStyle: 'italic',
                    color: 'gold'
                }}>
                    <h2>The Following Shows The Most Money Saved By Our Users</h2>
                </div>

                <div class="table12">
                    <table class="table1">
                        <tr>
                            <th>ID NO</th>
                            <th>NAME</th>
                            <th>AMOUNT SAVED</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Savio</td>
                            <td>10000000000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>ANOOP HEROLD</td>
                            <td>100000000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>ABHINAV</td>
                            <td>1000000</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>SHAHEEN</td>
                            <td>5000000</td>
                        </tr>
                    </table>
                </div>

                <div class="anchor">
                    <a href="sign.html">click here to register! </a>
                </div>
            </div>
        </div>
    );
}

export default Hom;