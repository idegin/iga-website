@AGENTS.md
@DESIGN.md
@PLAN.md

# Rules
1. Make sure the design is modern and beautiful.
2. Don't add code comments.
3. Always use semantic HTML.
4. The website should be SEO & AGO optimized.
5. Every section should be it's own component.
6. Use the best libraries for scroll transitions.
7. Use the best libraries for animations and hover effects.

# Definition of Done

A change is not done when it compiles. A passing build only proves the code parsed — it says nothing about what the user sees. Before reporting any UI work as finished:

1. **Run the app and look at it.** Open the browser and view the actual change. If you cannot see it, it is not done.
2. **Restart the dev server after editing `globals.css`.** Turbopack caches compiled CSS and silently serves stale styles when `@theme` or `@utility` blocks change. New utilities go missing with no error. Verify the class is present in the served CSS, not just in the source file.
3. **Check every state, not just the default.** Hover, focus, active, scrolled, open/closed, loading, empty. Most bugs live in the states you did not screenshot.
4. **Check mobile and desktop.** At minimum 390px and 1440px.
5. **Run Lighthouse.** Target 100 Accessibility and 100 SEO. Do not hand-wave a contrast warning — measure it. A flagged contrast failure is usually a real bug, not a false positive.
6. **Check the browser console.** Errors and 404s count as failures.
7. **Verify contrast on every text/background pair you introduced,** especially on brand gold, which fails AA as text on white.
8. **Never invent facts.** No placeholder phone numbers, addresses, founding dates, or statistics. Leave the field empty and say what is missing — fabricated data reaches production and structured data reaches Google.

Report honestly. If a step was skipped, say so.

# IGA Global
## About 
IGA Global Investment Ltd is a property investment advisory and marketing firm focused on helping clients invest in residential real estate in nigeria.
## Mission
To develop high quality,affordable properties that meet the housing needs of individuals and families,while fostering economic growth,enhancing communities,and providing exceptional value through integrity,innovation and professional excellence.
## Vision
To be a globally trusted and leading real estate development company, recognized for excellence in property acquisition,investment advisory,and wealth creation that transforms communities by delivering innovative,sustainable and affordable housing solutions that improve lives and create lasting value for generations.

## Industry
Real Estate

## Core Values
Integrity: Upholding honesty, transparency and ethical business practices.
Excellence: Delivery quality developments and outstanding services.
Affordable: Making home ownership and real estate investment accessible to more people.
Innovation: Embracing modern solutions to improve property development and customer experience.
Sustainability: Creating environmentally responsible and resilient communities.
Customer Commitment: Prioritizing the needs and satisfaction of clients and stakeholders.
Community impact: Contributing positivity to social and economic development.

## Leadership Profiles (optional)
CEO-  Iweka Gabriel Achebe 
