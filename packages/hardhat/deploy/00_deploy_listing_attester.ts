import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployListingAttester: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ListingAttester", {
    from: deployer,
    args: [
      "0x4200000000000000000000000000000000000021",
      "0x78322a5635d33090ff3aaa05e12910c29ce2f861d61774b8eeeac99fe312952f",
    ],
    log: true,
    autoMine: true,
  });
};

export default deployListingAttester;

deployListingAttester.tags = ["ListingAttester"];
