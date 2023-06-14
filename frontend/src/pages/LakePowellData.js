export default function LakePowellData() {
    const link = "https://lakepowell.water-data.com/";
  return (
    <div className="lake-powell-data" id="lake-powell-data">
      <iframe src={link} width="100%" height="100%" title="Lake Powell Data"></iframe>
    </div>
  );
}