import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployListingPaymentAttester: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ListingPaymentAttester", {
    from: deployer,
    args: [
      "0x4200000000000000000000000000000000000021",
      "0x03af61d3b039018ecefddd540027c175a252c6cb8dd13535441979c984d2b7ef",
    ],
    log: true,
    autoMine: true,
  });
};

export default deployListingPaymentAttester;

deployListingPaymentAttester.tags = ["ListingPaymentAttester"];
