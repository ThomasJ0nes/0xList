import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployListings: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const listingAttester = await hre.ethers.getContract<Contract>("ListingAttester", deployer);
  const listingAttesterAddress = await listingAttester.getAddress();

  const listingConnectionAttester = await hre.ethers.getContract<Contract>("ListingConnectionAttester", deployer);
  const listingConnectionAttesterAddress = await listingConnectionAttester.getAddress();

  const listingPaymentAttester = await hre.ethers.getContract<Contract>("ListingPaymentAttester", deployer);
  const listingPaymentnAttesterAddress = await listingPaymentAttester.getAddress();

  await deploy("Listings", {
    from: deployer,
    args: [listingAttesterAddress, listingConnectionAttesterAddress, listingPaymentnAttesterAddress],
    log: true,
    autoMine: true,
  });
};

export default deployListings;

deployListings.tags = ["Listings"];
