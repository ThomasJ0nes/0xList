import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployListingConnectionAttester: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ListingConnectionAttester", {
    from: deployer,
    args: [
      "0x4200000000000000000000000000000000000021",
      "0x70f935e1f3139195e5f2baf984dc658e725257d70db44f9571f3ab317d22a211",
    ],
    log: true,
    autoMine: true,
  });
};

export default deployListingConnectionAttester;

deployListingConnectionAttester.tags = ["ListingConnectionAttester"];
