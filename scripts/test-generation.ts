import { contentQueue } from '../lib/content/queue';
import { contentCache } from '../lib/content/cache';

async function testGeneration() {
  console.log('Starting content generation test...');
  
  // Test service content generation
  console.log('\nTesting service content generation...');
  await testServiceContent();

  // Test location content generation
  console.log('\nTesting location content generation...');
  await testLocationContent();

  // Test service-location content generation
  console.log('\nTesting service-location content generation...');
  await testServiceLocationContent();
}

async function testServiceContent() {
  await contentQueue.add({
    type: 'service',
    locale: 'fr',
    data: {
      slug: 'plombier',
      name: 'Plombier',
      description: 'Spécialiste en installation et réparation de plomberie',
      category: 'plumber'
    },
    priority: 1
  });

  await checkContent('service', 'fr', 'plombier');
}

async function testLocationContent() {
  await contentQueue.add({
    type: 'location',
    locale: 'fr',
    data: {
      slug: 'luxembourg-ville',
      name: 'Luxembourg-Ville',
      type: 'commune',
      population: 128514
    },
    priority: 1
  });

  await checkContent('location', 'fr', 'luxembourg-ville');
}

async function testServiceLocationContent() {
  await contentQueue.add({
    type: 'service-location',
    locale: 'fr',
    data: {
      serviceSlug: 'plombier',
      locationSlug: 'luxembourg-ville',
      serviceName: 'Plombier',
      locationName: 'Luxembourg-Ville',
      serviceDescription: 'Spécialiste en installation et réparation de plomberie',
      population: 128514
    },
    priority: 1
  });

  await checkContent('service-location', 'fr', 'plombier-luxembourg-ville');
}

async function checkContent(type: string, locale: string, slug: string) {
  console.log(`Waiting for ${type} content generation...`);
  
  // Wait for content generation (up to 30 seconds)
  for (let i = 0; i < 6; i++) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const content = contentCache.get(type, locale, slug);
    if (content) {
      console.log(`✓ ${type} content generated successfully!`);
      console.log('Content preview:', JSON.stringify(content, null, 2));
      return;
    }
  }
  
  console.log(`✗ ${type} content generation failed or timed out`);
}

testGeneration().catch(error => {
  console.error('Test failed:', error);
  process.exit(1);
});