import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
    projectId: 'nrlcd1tb',
    dataset: 'production',
    apiVersion: '2023-01-31',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

const urlFor = (source) => builder.image(source);

export {
    client,
    urlFor
}