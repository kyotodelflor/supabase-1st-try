import React from 'react';
import '../styles/MainInfo.css';
import StoreImg from '../imgs/store.svg';
import KeyImg from '../imgs/key.svg';
import DbImg from '../imgs/db.svg';
import BlockImg from '../imgs/imgblock1.png';
import ScBImg from '../imgs/secondblockimg.png';
import Logo2 from '../imgs/logo2.svg';

const MainContent = () => {
    return (
        <main style={mainStyle}>
            <section style={storageSection}>
                <div id='big-block1'>
                    <div id='mini-block'>
                        <img src={StoreImg} alt="" id='storageImg' /> <p>Storage</p>
                    </div>
                    <h2>Store and serve any type of digital content</h2>
                    <p>An open source Object store service with unlimited scalability, for any file type.
                        <br /> <br />
                        With custom policies and permissions that are familiar and easy to implement.</p>
                    <button id='startBtn'>Start a project</button>
                </div>

                <img src={BlockImg} alt="" id='MainBlock1Img' />
            </section>

            <section id='main-low'>
                <div id='low-block1'>
                    <div id='mini-block-row'>
                        <img src={StoreImg} alt="" /> X
                        <img src={KeyImg} alt="" /> X
                        <img src={DbImg} alt="" />
                    </div>
                    <p>Interoperable</p>
                    <p>Integrates well with the rest of Supabase ecosystem, including Auth and Postgres.</p>
                </div>

                <div id='low-block1'>
                    <div>
                        <img src={StoreImg} alt="" />
                    </div>
                    <p>Lightning fast</p>
                    <p>Thin API server layer that leverages Postgres' permissions and performance.</p>
                </div>

                <div id='low-block1'>
                    <div>
                        <img src={StoreImg} alt="" />
                    </div>
                    <p>Dependable</p>
                    <p>Enterprise-level scalability and durability.</p>
                </div>
            </section>

            <section style={dashboardSection}>
                <div>

                <h2>Sleek dashboard for managing your media</h2>
                <p>A complete Object Explorer so that any of your team can use.
                    <br /> <br /> Drag and drop uploading, moving objects, and multiple object selection. As easy as working on your desktop.</p>

                <div id='secondB-btns'>
                    <a href="#" id='sB-btn'>File previews</a>
                    <a href="#" id='sB-btn'>Column view</a>
                    <a href="#" id='sB-btn'>List view</a>
                    <a href="#" id='sB-btn'>Multi select actions</a>
                    <a href="#" id='sB-btn'>Path navigator</a>
                </div>

                <img src={ScBImg} alt="" id='scImgB' />

                </div>
                <div id='mini-block-dick'>
                    <h3>File previews</h3>
                    <p>Preview any media type, including video and audio.</p>
                    <h3>Check out our example app</h3>
                    <div id='mini-qw'>
                        <p>Profile management example</p>
                        <p id='mini-blockinf'>
                            Update a user account with public profile information, including uploading a profile image.
                        </p>
                        <div className='CrtdBy'>
                            <p>Created by:</p>
                            <img src={Logo2} alt="" />
                            <p>supabase</p>
                        </div>
                    </div>
                    <p>nextjs-ts-user-management</p>
                    <button id='d-btn'> ▲ Deploy</button>
                </div>
            </section>
        </main>
    );
};

const mainStyle = { padding: '20px', backgroundColor: '#121212', color: '#fff' };
const storageSection = { marginBottom: '40px', display: 'flex', marginTop: '100px', marginLeft: '120px', margin: 'auto', justifyContent: 'center' };
const dashboardSection = { marginTop: '200px', marginLeft: '-20px', display: 'flex', justifyContent: 'center'};

export default MainContent;
