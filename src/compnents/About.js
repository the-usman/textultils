import React from 'react'

export default function About(props) {
    return (
        <div>
            <div className="aboutContainer my-3" style={props.mode === 'dark' ? props.containerStlying : null}>
                <h1>
                    About TextUtils
                </h1>
            </div>
            <div className="aboutContainer2">
                <h2>Our Founder</h2>
                <p>
                    <span>Usman Javed</span> is the visionary behind our website, which is dedicated to empowering users with powerful text manipulation tools.
                </p>
                <p>
                    With a passion for technology and a keen interest in language, Usman realized the need for a platform that would simplify text handling and transform the way people interact with written content.
                </p>
                <p>
                    The website was born out of the idea that everyone, from writers and students to professionals and content creators, should have access to easy-to-use and efficient text manipulation tools. By enabling users to perform tasks such as converting text to uppercase, lowercase, or title case, removing duplicates, counting words, characters, and lines, and much more, Usman aims to make the process of working with text seamless and enjoyable.
                </p>
                <p>
                    As our founder, Usman Javed's vision is to create an inclusive platform where text manipulation becomes an effortless and intuitive experience. Through continuous innovation and user feedback, he strives to enhance the website's capabilities and provide a valuable resource for anyone dealing with text-related tasks.
                </p>
                <p>
                    Join us on this exciting journey as we revolutionize the way text is managed and unleash the potential of words to inspire, inform, and transform the world.
                </p>

                <h2>Our Mission</h2>
                <p>
                    At our website, our mission is to provide the most comprehensive and user-friendly text manipulation tools to individuals and businesses alike. We believe that language is a powerful tool that can shape ideas, connect people, and drive change. Our goal is to empower our users with the ability to manipulate and utilize text effectively, making their writing and content creation process more efficient and impactful.
                </p>
                <p>
                    We are committed to continuous improvement, and we value user feedback and suggestions. By actively listening to our users, we strive to evolve our platform to meet their evolving needs. We envision a future where text manipulation is no longer a barrier but a tool that brings creativity and expression to life.
                </p>

                <h2>Join Us Today</h2>
                <p>
                    Whether you're a writer, a student, a content creator, or anyone who works with text, we invite you to join our community. Explore our wide range of text manipulation tools, and experience the convenience and efficiency they bring to your work. Our founder, Usman Javed, and the entire team are excited to have you on this journey as we redefine the possibilities of text manipulation and pave the way for a more connected and empowered world.
                </p>
            </div>
        </div >
    )
}
