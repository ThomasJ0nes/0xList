import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployListings: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const listingAttester = await hre.ethers.getContract<Contract>("ListingAttester", deployer);
  const listingAttesterAddress = await listingAttester.getAddress();

  await deploy("Listings", {
    from: deployer,
    args: [listingAttesterAddress],
    log: true,
    autoMine: true,
  });
};

export default deployListings;

deployListings.tags = ["Listings"];
