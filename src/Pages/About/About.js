import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100">
            <div className="container max-w-7xl mx-auto py-10 shadow-2xl bg-white">
                <h1 className="text-xl xl:text-5xl text-gray-600 py-8 xl:py-14">About Wanderlust</h1>
                <img src="https://images.unsplash.com/photo-1474874055390-459bc92357f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1581&q=80" alt="" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="px-14 py-10 text-left">
                        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-500">
                            On a mission to build culture and community around travelling and regenerative living through championing outdoor lifestyle and nature connection.
                            <br /> <br />
                            In 2012, Wanderlust, Rachel Taylor and Jody Daunton, came together to create a high-quality lifestyle publication that inspires a connection to the great outdoors, considered ways of living, environmental stewardship and a sense of fulfilment in our everyday lives.
                            <br /> <br />
                            Through our love for storytelling, and working alongside our small team and a talented network of contributors, we have crafted a product for a community of outdoors people who are creative, curious and adventurous. We believe that if we can foster a meaningful relationship with nature then we may be best equipped and most motivated to offer stewardship to our planet, especially now, at a time when it so desperately needs it.
                        </p>
                    </div>
                    <div className="px-14 py-10 text-left">
                        <h2 className="text-xl font-semibold mb-4">Our Story</h2>
                        <p className="text-gray-500">
                            Wanderlust's founder grew up in rural Minnesota with most of his childhood spent outdoors. On the heels of a demanding startup job, Jon found himself burned out and longing for the role nature played in his youth. He quit and left the city behind in a 26’ Airstream trailer to take time to reflect. <br /> <br />

                            While traveling, Jon discovered that being in nature was critical to his well-being, productivity, and happiness. So much so that in the summer of 2015, Jon and his college buddy Pete Davis launched Getaway. With 15 Outposts and counting, Getaway offers simple escapes to nature within two hours of major cities across the country — inviting guests to savor their free time, find balance through disconnection, and enjoy the company of those who matter most.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;