import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployListingConnectionAttester: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ListingConnectionAttester", {
    from: deployer,
    args: [
      "0x4200000000000000000000000000000000000021",
      "0xb48e73c340e24d8b1ecb667484f63e5211e8cf0a0d949bb7f312060db29ac5c2",
    ],
    log: true,
    autoMine: true,
  });
};

export default deployListingConnectionAttester;

deployListingConnectionAttester.tags = ["ListingConnectionAttester"];
