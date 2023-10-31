```
# Run tests in all browsers against https://wwwdev.ebi.ac.uk/uniprot/front-end/dev/
yarn playwright test

# Run tests against www.uniprot.org
PROD=1 yarn playwright test

# Run tests in only chromium browser
yarn playwright test --project=chromium

# Run tests in only chromium browser and with UI to view by eye tests as they are run (very handy!)
yarn playwright test --project='chromium' --ui
```
