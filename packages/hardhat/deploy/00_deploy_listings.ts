import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployListings: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Listings", {
    from: deployer,
    args: [],
    log: true,
    autoMine: true,
  });
};

export default deployListings;

deployListings.tags = ["Listings"];
