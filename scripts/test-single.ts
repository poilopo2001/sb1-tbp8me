import { contentQueue } from '../lib/content/queue';
import { contentCache } from '../lib/content/cache';

async function testSingleGeneration() {
  console.log('Testing single content generation...');

  // Test with a simple service page
  const request = {
    type: 'service',
    locale: 'fr',
    data: {
      slug: 'plombier',
      name: 'Plombier',
      description: 'Spécialiste en installation et réparation de plomberie',
      category: 'plumber'
    },
    priority: 1
  };

  console.log('\nAdding request to queue:', JSON.stringify(request, null, 2));
  await contentQueue.add(request);

  // Wait for content generation (up to 30 seconds)
  for (let i = 0; i < 6; i++) {
    console.log(`\nChecking cache (attempt ${i + 1}/6)...`);
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    const content = contentCache.get('service', 'fr', 'plombier');
    if (content) {
      console.log('\n✓ Content generated successfully!');
      console.log('\nGenerated content:', JSON.stringify(content, null, 2));
      return;
    }
  }
  
  console.log('\n✗ Content generation failed or timed out');
}

// Run the test
testSingleGeneration().catch(error => {
  console.error('Test failed:', error);
  process.exit(1);
});