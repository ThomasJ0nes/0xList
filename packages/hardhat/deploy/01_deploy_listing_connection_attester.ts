import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployListingConnectionAttester: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ListingConnectionAttester", {
    from: deployer,
    args: [
      "0x4200000000000000000000000000000000000021",
      "0xa844aad897e631c5200bc2a0f5c093eeb3e96baa4f8428d93dbcb76e775906a9", // Sample SchemaUID
    ],
    log: true,
    autoMine: true,
  });
};

export default deployListingConnectionAttester;

deployListingConnectionAttester.tags = ["ListingConnectionAttester"];
