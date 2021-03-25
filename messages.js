const quotes = ["You always pass failure on the way
to success.", 
"No one is perfect - that’s why pencils have erasers.",
 "You’re braver than you believe, and stronger than you seem, and smarter than you think.", 
 "It always seems impossible until it is done.", 
 "Keep your face to the sunshine and you cannot see a shadow.", 
 "Positive thinking will let you do everything better than negative thinking will.", 
 "The only time you fail is when you fall down and stay down.",
 "Positive anything is better than negative nothing.",
 "“Winning is fun, but those moments that you can touch someone’s life in a very positive way are better.",
 "Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you.",
 "It makes a big difference in your life when you stay positive."
 ];
 const randomQuote = quotes[Math.floor(Math.random() * 10 )];
 
 function selectQuote(){
	 return randomQuote
 } ;