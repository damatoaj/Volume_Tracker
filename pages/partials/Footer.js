import Image from 'next/image'

export default function Footer() {
    return (
        <footer>
            <span>
                <h3>I am Arthur D'Amato</h3>
                <p>
                An experienced educator and coach turn software developer, I bring collaborative leadership to my teams by facilitating direct communication, managing goals/expectations, and being process oriented. With my background in kinesiology and philosophy, I am equipped with critical thinking and problem solving skills, which deliver excellent outcomes for clients and teammates. Dedicated, resilient, creative; I am a valuable addition to any team environment.		
                </p>
            </span>
            <span>
                <a href="https://github.com/damatoaj">
                    <Image 
                        id="github-logo"
                        src="/GitHub-Logo.png"
                        alt="Github Logo"
                        width={100}
                        height={100}
                    />
                </a>
                <a href="https://www.linkedin.com/in/arthur-d-amato-45b6b169/">
                    <Image 
                        id="linkedin-logo"
                        src="/linked_in_logo.svg"
                        alt="LinkedIn Logo"
                        width={100}
                        height={100}
                    />
                </a>
                <a href="https://arthurdamato.wordpress.com/">
                <Image 
                    id="wordpress-logo"
                    src="/wordpress_logo.svg"
                    alt="WordPress Logo"
                    width={100}
                    height={100}
                />
                </a>
            </span>
        </footer>
    )
}