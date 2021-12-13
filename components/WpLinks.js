import React from 'react'
import Link from 'next/link'

const styles = {
    content: {
        padding: '4px 32px 32px 32px',
        background: '#eeeeee',
        display: 'inline-block',
    },
    linkAnchor: {
        color: 'teal',
        display: 'block',
        lineHeight: '160%',
    },
}

const WpLinks = () => (
    <div style={styles.content}>
        <h4>Examples</h4>
        <div>
            <Link href="/">
                <a style={styles.linkAnchor}>Home: SSR, no auth required</a>
            </Link>
            <Link href="/wordpress/18">
                <a style={styles.linkAnchor}>
                    Buy a 2Spooky5Me
                </a>
            </Link>
            <Link href="/wordpress/1">
                <a style={styles.linkAnchor}>
                    Hello World Post
                </a>
            </Link>
        </div>
    </div>
)

WpLinks.displayName = 'wpLinks'

export default WpLinks
