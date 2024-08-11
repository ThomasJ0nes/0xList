
#  🛍️ 0xList - The world’s largest onchain marketplace. List, buy and sell anything onchain superfast on layer2 🔵

<h4 align="center">
  
  <a href="https://0xlist.vercel.app/">Website</a>
</h4>

Smart Contract Location /packages/hardhat/contracts

Front End Location /packages/nextjs

0xList was developed using a well-structured stack of modern Web3 and web technologies, designed to create an efficient, onchain marketplace experience. The project was built on top of the ETH Scaffold Base Boilerplate, which provided a reliable starting point for quickly developing and deploying our dApp.


![image](https://github.com/user-attachments/assets/fa689118-4ea9-4a6a-bfaf-29eb7a67a170)


Technologies Used:

- Next.js: We selected Next.js for its strong server-side rendering (SSR) capabilities, which allowed us to create a dynamic and performant user interface. Its seamless integration with React and other tools made it an ideal choice for the frontend of 0xList.

- Wagmi & RainbowKit: To manage wallet connections and blockchain interactions, we used Wagmi and RainbowKit. These libraries enabled users to connect their wallets easily, switch networks as needed, and interact with the platform's smart contracts.

- TypeScript: We implemented TypeScript across the entire project to enforce type safety, improve code maintainability, and reduce errors during development.

- Custom React Hooks: We developed custom React Hooks as well as used the boilplate hooks to facilitate interaction between the frontend and smart contracts. These hooks encapsulate the logic required for contract calls, ensuring that the frontend remains clean and maintainable.

- IPFS & Pinata: For storing images and media associated with listings, we used IPFS, leveraging Pinata for efficient and decentralized file uploads. This ensures that listing data is stored immutably and remains accessible through the IPFS network.

- Tailwind CSS & DaisyUI: Tailwind CSS and DaisyUI were used to style the application, providing a modern and responsive design. This combination allowed us to maintain a consistent and accessible user interface across different devices.

- Vercel: The frontend of 0xList was deployed using Vercel, as its fits well for deploying apps made in Nextjs quickly and easily. 

- Hardhat: Hardhat was used for smart contract development and testing. It provided us with the tools needed to write, deploy, and rigorously test our contracts, ensuring they were secure and functioned as intended.

- Partner Technologies:

- Ethereum Attestation Service (EAS): EAS played a crucial role in our contract architecture. By using EAS, we could create attestations for various actions on the platform, adding a layer of verification and trust to transactions. This helped ensure that each listing, connection, and payment was securely attested onchain.

- Base Network: We deployed the 0xList smart contracts on the Base network, which provided a secure and scalable environment for our onchain transactions. Base’s infrastructure allowed us to leverage low-cost transactions and ensured high performance, making it an ideal choice for building our onchain marketplace where speed and low gas fees are key.

Solidity Smart Contracts: 

- Listings Contract: The Listings contract is the core of the platform, allowing sellers to create, update, and delete listings. It manages the entire lifecycle of a listing, including user connections and purchases. Only connected users can purchase a listing, and once a listing is bought, it becomes unavailable to others.

- ListingAttester Contract: This contract interacts with the EAS to create attestations for new listings. Each listing on the platform is backed by an attestation, ensuring that the listing data is verified and trustworthy.

- ListingConnectionAttester Contract: This contract handles attestations related to user connections with listings. When a user connects to a listing, this attester creates a corresponding attestation, which is used to verify the user's connection status when they attempt to make a purchase.

- ListingPaymentAttester Contract: The ListingPaymentAttester contract is responsible for creating attestations when a user completes a purchase. This ensures that each transaction is recorded and verified, adding an extra layer of security and transparency to the buying process.


To replicate follow these intructions: 

For interacting with Deployed Contracts in Base Sepolia 
 
Simply run 
```
yarn install
```

```
yarn start
```

For developing on local chain using hard hat run 

```
git clone https://github.com/BuidlGuidl/scaffold-base
cd scaffold-base
yarn install
```
 Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

 On a second terminal, deploy the test contract:

```
yarn deploy
```

 On a third terminal, start your NextJS app:

```
yarn start
```
